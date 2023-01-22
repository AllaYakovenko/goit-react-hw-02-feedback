import PropTypes from 'prop-types';
import css from 'components/Section/Section.module.css';

const Section = ({ title, children }) => (
    <div>
        <h1 className={css.title}>{title}</h1>
        {children}
    </div>
);

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;