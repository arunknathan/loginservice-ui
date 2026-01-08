const Fieldset = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      {/* Label */}
      <label className="block text-gray-700 text-sm font-semibold mb-2">
        {label}
      </label>

      {/* Input field */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default Fieldset;
