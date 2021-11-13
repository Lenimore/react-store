import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
	constructor() {
	  this._types = [
	  	{id: 1, name: 'refrigerators'},
	  	{id: 2, name: 'smartphones'}
	  ]
	  this._brands = [
	  	{id: 1, name: 'Sumsung'},
	  	{id: 2, name: 'Apple'}
	  ]
	  this._device = [
	  	{id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img:'/'},
	  	{id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img:'/'},
	  	{id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img:'/'},
	  	{id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img:'/'},
	  ]

	  makeAutoObservable(this)
	}

	 setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

	get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}