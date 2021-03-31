const _ = require("lodash");
const jsonfile = require('jsonfile')
const _Regionfile = "./Countries/Tanzania/Regions.json"
const _Wardsfile = "./Countries/Tanzania/Wards.json"
const _Districtfile = "./Countries/Tanzania/Districts.json"




exports.regions = function () {
jsonfile.readFile(_Regionfile,(err,obj)=>{
let Regions = [];
  if(err){
      console.error(err);
  }
  _.forEach(obj['features'],(regionObject) =>{
Regions.push( regionObject['properties']['region'])  
  }) 
 console.dir(Regions);

});

}


exports.alldistrict = function () {
    jsonfile.readFile(_Districtfile,(err,obj)=>{
    let Districts = [];
      if(err){
          console.error(err);
      }     
     
      _.forEach(obj['features'],(regionObject) =>{
        Districts.push( regionObject['properties']['District'])  
      }) 
      console.log(Districts);
    });
    
    }



    exports.districtsPerRegion = function (regionName) {
      jsonfile.readFile(_Districtfile,(err,obj)=>{
      let DistrictsPerRegion = [];
        if(err){
            console.error(err);
        } 
        _.forEach(obj['features'],(regionObject) =>{
                   if(regionObject['properties']['region'] == regionName){
DistrictsPerRegion.push(regionObject['properties']['District']);
          }
        }) 
       console.log(DistrictsPerRegion);
      
      });
      
      }


      exports.allWards = function () {
        jsonfile.readFile(_Wardsfile,(err,obj)=>{
        let wards = [];
          if(err){
              console.error(err);
          } 
          _.forEach(obj['features'],(districtObject) =>{               

                wards.push( districtObject['properties']['Ward']);  
          }) 
          console.log(wards)
        });
        
        }