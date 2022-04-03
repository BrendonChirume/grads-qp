import { oneOfType, node, number, arrayOf } from 'prop-types';

export default function TabContent(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabContent.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
  index: number.isRequired,
  value: number.isRequired
};
