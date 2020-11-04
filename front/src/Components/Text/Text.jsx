import './text.sass'

const InputText = ({ label, onChange, name, value, type='text', align="left", prefix = '', suffix = '' }) => {
	
	return (
		<>
			<div className="input-text">
				<div className="prefix">{prefix}</div>
				<input type={type} name={name} value={value} onChange={onChange} style={{ textAlign: align }} />
				<div className="suffix">{suffix}</div>
				<div className="label">{label}</div>
			</div>
		</>
	)
}
export default InputText
