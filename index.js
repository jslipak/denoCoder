import {bgBlue, bgRed, bgGreen, bgYellow,bgBlack, bgWhite, black, white, bold, green, red} from 'https://deno.land/std/fmt/colors.ts';

let nums = Deno.args;
let res = null;
if(nums.length > 0){
  res = nums.reducte((p,c, i)=>{
    if(i == 0) return {min:Number(c), max:Number(c)}, promedio:Number(c)};
  return {
    min:c.min > p.min? p.min : Number(c.min),
      max:c.max < p.max? p.max : Number(c.max),
    promedio:p.promedio + Number(c)
  },{})
  res.promedio = res.promedio / nums.length
  console.log()
