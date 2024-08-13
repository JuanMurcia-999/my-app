import SimpleAreaChart from './typeArea'

export default function Graphics({ data }) {

  return (
    <>
      <div className=" flex  justify-center bg-cyan-400 m-[10px] dark:bg-gray-700">
        <SimpleAreaChart data={data} />
      </div>
    </>
  )
}
