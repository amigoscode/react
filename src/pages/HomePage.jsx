const HomePage = () => {
  return (
    <>
      <h1>Todo List</h1>
      <form>
        <section style={{ marginTop: '1rem' }}>
          <label htmlFor="todoTask">Task</label>
          <br />
          <input style={{ width: '13rem' }} type="text" id="todoTask" name="todo" placeholder="buy chocolate" />
        </section>
      </form>
      <section style={{ marginTop: '1rem', width: '14rem' }}>
        <strong>Tasks</strong>
      </section>
    </>
  );
};

export default HomePage;
