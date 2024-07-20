const Title = ({ title }) => {
  console.log("Hola");
  return (
    <>
      <h1 className="text-center text-3xl font-bold pb-3 border-b-4 border-black font-title ">
        {" "}
        {title}
      </h1>
    </>
  );
};

export default Title;
