import * as React from 'react';
import GraduationIcon from '@sprites/GraduationIcon';
import Margin from '@widgets/Margin';

const Education = () => (
  <section>
    <h2>Education</h2>
    <p>
      While growing up in Delhi, wrote first program in
      {' '}<a href="https://en.wikipedia.org/wiki/Logo_(programming_language)">Logo</a>{' '}
      to control a turtle to draw a house, and was forever hooked!
      Won national coding competitions throughout high school and beat out participants
      from higher grades to represent India in international contests. Went on to graduate
      from the University of Virginia with a degree in Computer Science.
    </p>
    <Margin height={32} />
    <div className="boxed center flex-reverse">
      <div className="center" style={{ display: 'table', flexGrow: 1 }}>
        <h3 style={{ display: 'table-cell', verticalAlign: 'middle' }}>
          Undergraduate&nbsp;thesis on
          <br />
          non&#8209;photorealistic rendering:
          <br />
          <a href="/samir-roy-stylespheres.pdf" target="_blank" rel="noreferrer">Style Spheres</a>
        </h3>
      </div>
      <div className="mobile" style={{ height: 16 }} />
      <div className="center" style={{ minWidth: 250 }}>
        <GraduationIcon />
      </div>
    </div>
  </section>
);

export default React.memo(Education);
