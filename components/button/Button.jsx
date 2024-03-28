import React from 'react'

const Button = ({menu,filterData,allMenu}) => {
  return (
    <div className="flex flex-wrap gap-[1px] justify-center py-6">
          <button className={`btn-group ${menu==='All Menu'?'bg-red-500 text-white':'bg-white'}`} onClick={() => allMenu('All Menu')}>
            All Menu
          </button>
          <button className={`btn-group ${menu==='Breakfast'?'bg-red-500 text-white':'bg-white'}`} onClick={() => filterData("Breakfast")}>
            Breakfast
          </button>
          <button className={`btn-group ${menu==='Lunch'?'bg-red-500 text-white':'bg-white'}`} onClick={() => filterData("Lunch")}>
            Lunch
          </button>
          <button className={`btn-group ${menu==='Dinner'?'bg-red-500 text-white':'bg-white'}`} onClick={() => filterData("Dinner")}>
            Dinner
          </button>
          <button
            className={`btn-group ${menu==='Budget Meal'?'bg-red-500 text-white':'bg-white'}`}
            onClick={() => filterData("Budget Meal")}
          >
            Budget Meal
          </button>
          <button className={`btn-group ${menu==='Buffet'?'bg-red-500 text-white':'bg-white'}`} onClick={() => filterData("Buffet")}>
            Buffet
          </button>
        </div>
  )
}

export default Button
