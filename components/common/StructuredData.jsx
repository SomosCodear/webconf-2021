/* eslint-disable react/no-danger */

import propTypes from 'prop-types';

const StructuredData = ({ jsonLD }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />
);

StructuredData.propTypes = {
  jsonLD: propTypes.shape().isRequired,
};

export default StructuredData;
