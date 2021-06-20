export default function Author({ author }) {
  return (
    <>
      <span>{author.name}</span>
      <style jsx>
        {`
          span {
            color: #9b9b9b;
          }
        `}
      </style>
    </>
  );
}
