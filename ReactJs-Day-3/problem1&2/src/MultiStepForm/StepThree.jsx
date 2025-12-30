export default function StepThree({ data, back }) {
  return (
    <>
      <h3>Review Details</h3>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Password: {data.password}</p>

      <button onClick={back}>Back</button>
      <button onClick={() => alert("Form Submitted")}>Submit</button>
    </>
  );
}
