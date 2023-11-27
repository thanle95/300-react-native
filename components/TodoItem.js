import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function TodoItem({task, index, onPress, isCompleted = false}) {
  return (
    <TouchableOpacity className={`flex flex-row items-center px-4 py-2  rounded-md mb-4 ${isCompleted ? 'bg-gray-100' : 'bg-white'}`} onPress={onPress}>
      <Text className={` ${index % 2 === 0 ? "bg-blue-400": "bg-green-400"}  py-2 px-3 rounded-md text-white font-extrabold text-lg`}>{index.toString().padStart(2, "0")}</Text>
      <Text className={`text-lg ml-4 ${isCompleted? 'line-through': ''}`}>{task}</Text>
    </TouchableOpacity>
  )
}