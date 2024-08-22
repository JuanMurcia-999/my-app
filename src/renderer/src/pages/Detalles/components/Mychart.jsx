import React, { useState, useEffect } from 'react'
import { Chart } from 'chart.js/auto'

export default function MyChart({ labels, data }) {
  let datasets = []
  const colors = [
    '#B22222',
    '#FF4500',
    '#32CD32',
    '#1E90FF',
    '#FFD700',
    '#8A2BE2',
    '#A52A2A',
    '#DEB887',
    '#5F9EA0',
    '#7FFF00',
    '#D2691E',
    '#FF7F50',
    '#6495ED',
    '#FFF8DC',
    '#DC143C',
    '#00FFFF',
    '#00008B',
    '#008B8B',
    '#B8860B',
    '#A9A9A9',
    '#006400',
    '#BDB76B',
    '#8B008B',
    '#556B2F',
    '#FF8C00'
  ]

  if (data) {
    Object.keys(data).forEach((clave) => {
      const ColorOne = colors[Math.floor(Math.random() * colors.length)]
      const ColorTwo = colors[Math.floor(Math.random() * colors.length)]
      datasets.push({
        label: clave,
        data: data[clave].map((str) => parseFloat(str, 10.0)),
        backgroundColor: ColorOne, // Asigna un color basado en el índice
        borderColor: ColorTwo,
        borderWidth: 1
      })
    })
  }

  const chartData = {
    labels: labels,
    datasets: datasets
  }

  useEffect(() => {
    const ctx = document.getElementById('myChart')
    const myChart = new Chart(ctx, {
      type: 'bar', // Asegúrate de que el tipo de gráfico sea correcto
      data: chartData,
      options: {
        // Aquí puedes agregar opciones de configuración adicionales
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    })
    // Limpieza: Destruir el gráfico cuando el componente se desmonte
    return () => {
      myChart.destroy()
    }
  }, [chartData])

  return (
    <div className=" flex justify-center h-[50%]  dark:bg-cyan-800">
      <canvas id="myChart" />
    </div>
  )
}
