interface SubscribeButtonProps {
  className: string,
  disabled?: boolean
  value?:string,
  type: 'submit'|'button',
}

const SubscribeButton = ({
  className, disabled, value, type = 'button',
}: SubscribeButtonProps) => (
  <button
    disabled={disabled}
    className={className}
    type={type}
  >
    {value}
  </button>
);

export default SubscribeButton;
