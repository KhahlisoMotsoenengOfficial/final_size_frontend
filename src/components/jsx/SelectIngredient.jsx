import Select from "react-select";

export default function Login() {
  const ingredients = [
    { value: "1a", label: "UX/Interface - update existing" },
    { value: "2a", label: "UX/Interface - new" },
    { value: "3a", label: "DB creation/configuration" },
  ];

  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption);
  }

  return <Select options={ingredients} onChange={handleChange} isMulti />;
}
