import React from 'react'

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-fuscous-gray-400 grid justify-center p-4">
      <h2 className="">Copyright © {currentYear}</h2>
    </footer>
  )
}

export default Footer
