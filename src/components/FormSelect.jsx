import React from "react";

const FormSelect = ({ name, label, list, defaultValue, size }) => {
	return (
		<div className="form-control">
			<label htmlFor={name} className="label">
				<span className="label-text capitalize">{label}</span>
			</label>
			<select
				name={name}
				id={name}
				defaultValue={defaultValue}
				className={`select select-bordered ${size}`}
			>
				{list.map((item) => (
					<option value={item} key={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
};

export default FormSelect;
