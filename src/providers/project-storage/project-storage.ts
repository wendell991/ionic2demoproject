import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
/*
  Generated class for the ProjectStorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class ProjectStorageProvider {
	list: any;
	
	setList(): boolean{
		localStorage.setItem("list", JSON.stringify(this.list));
		return true;
	}
	
	public GetList(): any{
		console.log(localStorage.getItem("list"));
		this.list = JSON.parse(localStorage.getItem("list"));
		if(this.list!=null){
			return this.list;
		}else{
			return [];
		}
	}
	
	public AddList(value: string): boolean{
		this.GetList();
		if(this.list!=null){
			var arrLen = this.list.length;
			var found = false;
			for(var i = 0; i < arrLen; i++){
				if(this.list[i] == value){
					found = true;
					i = arrLen;
				}
			}
			if(!found){
				this.list.push(value);
			}
			this.setList();
			return !found;
		}else{
			this.list = [];
			this.list.push(value);
			this.setList();
			return true;
		}
	}
	
}
