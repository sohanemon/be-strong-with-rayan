export function Heading({ children }) {
  return (
    <div className='mb-10 mt-20'>
      <h1 className='text-4xl tracking-wide  font-black text-center'>
        {children}
      </h1>
    </div>
  );
}
