import { FiLogIn } from 'react-icons/fi'
import './button.sass'

const Button = ({ label, onClick }) => (
	<button className="button" onClick={onClick}>
		<FiLogIn className="icon" />
	<div className="text">{label}</div>
	</button>
)
export default Button
