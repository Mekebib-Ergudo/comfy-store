import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
	const navigate = useNavigation();
	const isSubmitting = navigate.state === "submitting";
	return (
		<button
			className="btn btn-primary btn-block "
			type="submit"
			disabled={isSubmitting}
		>
			{isSubmitting ? (
				<>
					<span className="loading loading-spinner"></span>
					Sending...
				</>
			) : (
				text || "submit"
			)}
		</button>
	);
};

export default SubmitBtn;
