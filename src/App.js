import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DATA_REQUEST, fetchDataRequest, postDataRequest } from './app/actions/api.action';

function App() {

  const [post, setPost] = useState({
    body: '',
    id: null,
    title: '',
    userId: null
  });

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDataRequest({ type: FETCH_DATA_REQUEST }));
  }, [dispatch])

  const handleChangePost = (e) => {
    setPost((prev) => ({ ...prev, [e.target.name]: e.target.value.trim() }));
  }

  const isAnyFieldEmpty = (post) => {
    return Object.values(post).some(value => value === '' || value === null);
  }

  const handlePostData = () => {
    if (isAnyFieldEmpty(post)) {
      console.log(123);
    } else {
      dispatch(postDataRequest(post));
    }
  }

  return (
    <div className="App">
      <h1>ADDING POST</h1>
      <div className="grid gap-6 mb-6:grid-cols-1">
        <div >
          <label for="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body: </label>
          <input name="body" required type="text" className="bg-grap-50 border border-grap-300 text-grap-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Body..." id="body" onChange={(e) => handleChangePost(e)} />
        </div>

        <div >
          <label for="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id: </label>
          <input name="id" required type="number" className="bg-grap-50 border border-grap-300 text-grap-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Id..." id="id" onChange={(e) => handleChangePost(e)} />
        </div>

        <div >
          <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title: </label>
          <input name="title" required type="text" className="bg-grap-50 border border-grap-300 text-grap-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..." id="title" onChange={(e) => handleChangePost(e)} />
        </div>

        <div >
          <label for="userId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Id: </label>
          <input name="userId" required type="number" className="bg-grap-50 border border-grap-300 text-grap-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User ID..." id="userId" onChange={(e) => handleChangePost(e)} />
        </div>

        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 front-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={handlePostData} >Submit</button>
      </div>

      <section>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Body
                </th>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  User ID
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
                    {item.body}
                  </th>
                  <td className="px-6 py-4">
                    {item.id}
                  </td>
                  <td className="px-6 py-4">
                    {item.title}
                  </td>
                  <td className="px-6 py-4">
                    {item.userId}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>
    </div>
  );
}

export default App;
