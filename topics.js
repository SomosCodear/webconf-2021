/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
const fs = require('fs');
// const { translate } = require('bing-translate-api');

const TOPICS_FILE = './public/topics.json';
const EXCLUDED_TOPICS = (entry) =>
  !['index.md', 'actions', '3d', 'advent-of-code', 'animal-crossing'].includes(entry);

if (fs.existsSync(TOPICS_FILE)) {
  console.log('Deleting old topics.json...');
  fs.unlinkSync(TOPICS_FILE);
}

const topics = fs
  .readdirSync('./tmp-topics/topics')
  .filter(EXCLUDED_TOPICS)
  .map((topic) =>
    fs
      .readFileSync(`./tmp-topics/topics/${topic}/index.md`)
      .toString('utf-8')
      .split('\n')
      .filter(
        (line) =>
          line && line !== '---' && !line.includes('short_description') && !line.startsWith(' '),
      )
      .map((line) => line.split(': '))
      .map(([property, ...values]) =>
        values.length === 0
          ? { descriptionEnglish: property || '', descriptionSpanish: '' }
          : {
              [property]:
                values.length > 1
                  ? values
                  : property === 'aliases' || property === 'related'
                  ? values[0].split(', ')
                  : values[0],
            },
      )
      .reduce((combinedData, data) => ({ ...combinedData, ...data }), {}),
  );

(async () => {
  /* for (let i = 0; i < topics.length; i += 1) {
    const topicToTranslate = topics[i];

    if (!topicToTranslate.descriptionEnglish) {
      continue;
    }

    try {
      const result = await translate(
        topicToTranslate.descriptionEnglish,
        'en',
        'es',
        false,
        false,
        'www',
      );
      const descriptionSpanish = result.translation;
      console.log(`Translated ${i + 1} of ${topics.length}`);

      topics[i] = {
        ...topicToTranslate,
        descriptionSpanish,
      };
    } catch {
      console.log(`Could not translate topic #${i + 1} (${topicToTranslate.topic})`);
    }
  }
  */

  console.log('Skipping translation');
  return topics;
})().then((topicsTranslated) => {
  fs.writeFileSync(TOPICS_FILE, JSON.stringify(topicsTranslated, null, 2));
});
