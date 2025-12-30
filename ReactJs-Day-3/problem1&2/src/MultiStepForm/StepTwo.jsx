export default function StepTwo({ data, setData, next, back }) {
  return (
    <>
      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={e => setData({ ...data, password: e.target.value })}
      />
      <br />
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  );
}
