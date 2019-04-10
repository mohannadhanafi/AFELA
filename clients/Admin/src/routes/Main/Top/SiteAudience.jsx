import React from 'react';

import LineIndicator from './LineIndicator';

const SiteAudience = ({ data }) => {
  const { visitorsCount } = data;
  const visitorsCountSlice = visitorsCount.slice(0, 2);
  const threeCount = visitorsCountSlice.reduce((a, { count }) => a + count, 0);
  const totalCount = visitorsCount.reduce((a, { count }) => a + count, 0);
  const otherCount = totalCount - threeCount;
  return (

    <div className="gx-site-dash gx-mb-2 gx-pt-3 gx-pt-sm-0 gx-pt-xl-2">
      <h6 className="gx-text-uppercase gx-mb-2 gx-mb-sm-4">SITE AUDIENCE</h6>
      <ul className="gx-line-indicator">
        {visitorsCountSlice.map(country => (
          <li>
            <LineIndicator width={`${country.count / totalCount * 100}%`} title={country.visitors} color="cyan" value={`${Math.round(country.count / totalCount * 100)}%`} />
          </li>

        ))}
        <li>
          <LineIndicator width={`${otherCount / totalCount * 100} %`} title="Others" color="orange" value={`${Math.round(otherCount / totalCount * 100)}%`} />
        </li>
      </ul>
    </div>
  );
};


export default SiteAudience;
