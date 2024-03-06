import styles from './index.module.scss';

const Index = ({
  label,
  type,
  name,
  value,
  isRequired,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  onClick,
}) => {
  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}
      <input
        name={name}
        value={value}
        required={isRequired}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onClick={onClick}
      />
    </div>
  );
};

export default Index;
