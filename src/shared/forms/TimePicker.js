import React from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/light.css'
import Icons from '../Icons'
import { classNames } from '../../utils/helper'

const CustomInput = ({ value, defaultValue, inputRef, ...props }) => {
	return (
		<div className="relative">
			<input
				className="w-full rounded-lg font-medium bg-cultured1 focus:border focus:border-gray1 placeholder:text-gray2 border border-cultured1 outline-none pl-12 pr-4 py-3"
				{...props}
				{...{ value }}
				placeholder="10/06/2023"
				defaultValue={defaultValue}
				ref={inputRef}
			/>
			<Icons
				className="absolute top-[50%] left-4 translate-y-[-50%]"
				id="timer"
			/>
		</div>
	)
}

const TimePicker = ({
	className,
	value,
	name,
	label,
	isHideLabel,
	timeFormat,
	defaultValue,
	handleChange,
	...props
}) => {
	return (
		<div className={classNames(className)}>
			{!isHideLabel ? (
				<span className="text-black font-medium text-base mb-1">{label}</span>
			) : null}
			<Flatpickr
				{...props}
				defaultValue={defaultValue}
				onChange={(data) => handleChange({ target: { name, value: data[0] } })}
				value={value}
				options={{
					enableTime: true,
					autoFillDefaultTime: true,
					dateFormat: timeFormat,
					noCalendar: true,
					mode: 'time'
				}}
				render={({ defaultValue, value, ...props }, ref) => {
					return (
						<CustomInput
							{...{ value }}
							{...props}
							name="date"
							defaultValue={defaultValue}
							inputRef={ref}
						/>
					)
				}}
			/>
		</div>
	)
}

export default TimePicker
