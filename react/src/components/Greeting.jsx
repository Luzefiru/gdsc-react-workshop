function Greeting({ currentUser }) {
  return (
    <p>
      Welcome {currentUser.name}, I&apos;m so happy that you are{' '}
      {currentUser.age} years old!
    </p>
  );
}

export default Greeting;
