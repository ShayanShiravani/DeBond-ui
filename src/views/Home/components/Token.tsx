import React from 'react'

interface TokenType {
  logo: string,
  name: string,
  className?: string
}

const Token: React.FC<TokenType> = (props) => {
  const { logo, name, className } = props
  return (
    <div className={className}>
      <div className='h-full px-2 py-1.5 flex items-center gap-2 cursor-default'>
        <picture>
          <img src={logo} alt={name} className='w-6 h-6' />
        </picture>
        <p className='font-medium'>{name}</p>
      </div>
    </div>
  )
}

export default Token
