import React, { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import TodoItem from '../components/TodoItem'


export default function TodoListScreen() {
    const [tasks, setTasks] = useState(["Clean up the house", "Wash the dishes"])
    const [completedTasks, setCompletedTasks] = useState([])
    const [value, setValue] = useState('')
    return (
        <View className="flex-1 flex flex-col items-start justify-start p-7 bg-teal-50">
            <Text className="text-3xl text-teal-600 font-bold text-left ">Todo List</Text>
            <ScrollView className="flex-1 w-full my-8 flex flex-col">
                {tasks.map((task, index) => <TodoItem key={index + task} task={task} index={index + 1} onPress={() => {
                    setCompletedTasks(prev => [task, ...prev])
                    setTasks(prev => prev.filter((_, i) => i !== index))
                }} />)}
            </ScrollView>
            {completedTasks.length > 0 && <>
                <Text className="text-3xl text-teal-600 font-bold text-left ">Completed Todo</Text>
                <ScrollView className="flex-1 w-full my-8 flex flex-col">
                    {completedTasks.map((task, index) => <TodoItem isCompleted key={index + task} task={task} index={index + 1} onPress={() => {
                        setTasks(prev => [task, ...prev])
                        setCompletedTasks(prev => prev.filter((_, i) => i !== index))
                    }} />)}
                </ScrollView>
            </>}
            <View className="flex flex-row">
                <TextInput className="flex-1 h-12 w-40 border-2 border-blue-400 rounded-md mr-4 pl-4 text-xl" value={value} onChangeText={setValue} placeholder="input the todo" />
                <TouchableOpacity
                    onPress={() => {
                        setTasks(prev => [value, ...prev])
                        setValue('')
                    }}
                    className="w-12 h-12 items-center justify-center bg-blue-400 rounded-full"
                ><Text className="text-white text-3xl">+</Text></TouchableOpacity>
            </View>
        </View>
    )
}