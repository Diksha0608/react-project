import React from 'react';

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    // window.location.reload()
    props.changeUser('');
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>
         {props.firstName ? `${props.firstName} 👋` : 'User 👋'}
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
