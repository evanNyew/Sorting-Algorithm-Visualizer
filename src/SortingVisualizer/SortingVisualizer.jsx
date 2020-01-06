import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../sortingAlgorithm/MergeSortAlgo'
import {getHeapSortAnimations} from '../sortingAlgorithm/HeapSortAlgo'
import {getBubbleSortAnimations} from '../sortingAlgorithm/BubbleSortAlgo'
import {getQuickSortAnimations} from '../sortingAlgorithm/QuickSortAlgo'

const ANIMATION_SPEED_MS = 5;
const NUMBER_OF_ARRAY_BARS = 25;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
            array: [],
        };
    }
    componentDidMount(){
        this.restArray();
    }

    restArray(){
        const array = [];
        for(let i=0; i < NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomFromInterval(5,500))
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.width = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
      }

    /*  mergeSort
        - check whether the algorithm is correct
     
    mergeSort(){
        const javaScriptSortedArray = this.state.array.slice().sort((a,b) => a - b);
        const sortedArray = sortingAlgorithm.mergeSort(this.state.array);
        console.log(arrayAreEqual(javaScriptSortedArray,sortedArray));
    }
    */

    quickSort(){

    }

    heapSort(){

    }

    bubbleSort(){

    }

    render(){
        const {array} = this.state;
        return (
            <>
            <ul className="navbar">
                <li>
                    <button className="navbar-btn" onClick={() => this.restArray()}> Generate New Array </button>
                </li>
                <li>
                    <button className="navbar-btn" onClick={() => this.mergeSort()}> Merge Sort </button>
                </li>
                <li>
                    <button className="navbar-btn" onClick={() => this.quickSort()}> Quick Sort </button>
                </li>
                <li>
                    <button className="navbar-btn" onClick={() => this.heapSort()}> Heap Sort </button>
                </li>
                <li>
                    <button className="navbar-btn" onClick={() => this.bubbleSort()}> Bubble Sort </button>
                </li>
            </ul>
            <div className="array-container">
                {array.map((value, index) => (
                    <div 
                        className="array-bar" 
                        key={index}
                        style={{width: `${value}px`}}>{value}
                    </div>
                ))}
            </div>
            </>
        );
    }
}

function randomFromInterval(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }