import { useState } from 'react'
import { MdVisibilityOff, MdVisibility } from 'react-icons/md'
import './password.sass'

const InputPassword = ({ label, onChange, name, value,  prefix = '' }) => {
	const [visible, setVisible] = useState(false)

	const inputVisible = () => {
		setVisible(!visible)
	}

	return (
		<>
			<div className="input-password">
				<div className="prefix">{prefix}</div>
				<input type={visible ? "text" : "password"} name={name} value={value} onChange={onChange} />
				<div className="suffix" onClick={inputVisible}>
					{visible ? <MdVisibility /> : <MdVisibilityOff />}
				</div>
				<div className="label">{label}</div>
			</div>
		</>
	)
}
export default InputPassword
