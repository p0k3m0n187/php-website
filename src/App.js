import './App.css';

export const App = () => {
  return (
    <>
      <div className="App">
        <div className="title">Students</div>
        <button className="list-bttn">List</button>
        <button className="Add-bttn">Add</button>
        <div className="table-list">
          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>ID</th>
                <th>Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><button className='edit-bttn'>Edit</button>     <button className="del-bttn">Delete</button></td>
                <td>ID-27251221</td>
                <td>Sample Name</td>
                <td>75.56</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
