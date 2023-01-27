function ans(ar,res)
{
  for(let i=0;i<ar.length;i++)
  {
    for(let j=0;j<ar.length;j++)
    {
      if(i!=j)
      {
        if(ar[i]+ar[j]===res)
        {
          return([ar[i],ar[j]]);
        }
      }
    }
  }
}
console.log(ans([1,2,4,7,8],12));