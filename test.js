
$(document).ready(function(){

 var a=0,i,j;

   var store = new Array(43);
   var row = new Array(7);
   var hori = new Array(7);
    var verti = new Array(7);
     var colum = new Array(7);
      var av = new Array(7);
         var cop = new Array(7);
        
    for(i=0;i<=42;i++){
       store[i] = 0;
    }
     

  var arr = new Array(6);
   
    for(i=0;i<7;i++){
         arr[i] = new Array(7);
   }

 for(i=0;i<6;i++)
  {
      for(j=0;j<7;j++){
        arr[i][j]= 0;
    }
      
  } 
  

 /* for(i=0;i<6;i++)
  {
      for(j=0;j<7;j++){
          console.log(arr[i][j]);     
    }
        console.log('\n');   
  }
 */



function vertical( row , arr , i)
{
    var m,l,k=0;
    m=row[i];

    for(l=m; l<=5; l++)
    {
        if(arr[l][i]==1)
        {
            if(l<=3)
            {
               if((arr[l+2][i]==1)&&(arr[l+1][i]==1)&&(arr[l][i]==1))
               {
                   k=k+7;
               }
               else
               {
                   k=k+1;
               }
            }
            else
            {
                k=k+1;
            }
        }
        else if(arr[l][i]==2)
        {

          if(l<=3)
            {
               if((arr[l+2][i]==2)&&(arr[l+1][i]==2)&&(arr[l][i]==2))
               {
                   k=k+8;
               }
               else
               {
                   k=k+3;
               }
            }
            else
            {
                k=k+3;
            }
        }
        else{
            continue;
        }
    }

    return k;
}


     
function horizontal( row,  arr, i)
{
    var m,l,k=0;
    m=row[i];

  if(m != 10){

    if(i==0)
    {
        for(l=0; l<=3; l++)
        {
            console.log("m= "+m+" and l="+l);
            console.log("arr[m][l]="+arr[m][l]);

            if(arr[m][l]==1)
            {
                if(l<=2)
                {
                   if((arr[m][l-2]==1)&&(arr[m][l-1]==1)&&(arr[m][l]==1))
                   {
                       k=k+7;
                   }
                }
                else{
                    k=k+1;
                }

            }
            else if(arr[m][l]==2)
            {
                if(l<=3)
                {
                    if((arr[l+2][i]==2)&&(arr[l+1][i]==2)&&(arr[l][i]==2))
                    {
                        k=k+8;
                    }
                    else
                    {
                        k=k+3;
                    }
                }
                else
                {
                    k=k+3;
                }
            }
            else{
                continue;
            }

        }
    }

    if(i==1)
    {
        for(l=0; l<=4; l++)
        {
            if(arr[m][l]==1)
            {
                if(l<=2)
                {
                    if((arr[m][l-2]==1)&&(arr[m][l-1]==1)&&(arr[m][l]==1))
                    {
                        k=k+7;
                    }
                    else{
                        k=k+1;
                    }
                }
                else
                {
                    k=k+1;
                }
            }
            else if(arr[m][l]==2)
            {
                if(l<=2)
                {
                    if((arr[m][l-2]==2)&&(arr[m][l-1]==2)&&(arr[m][l]==2))
                    {
                        k=k+8;
                    }
                    else{
                        k=k+3;
                    }
                }
                else
                {
                    k=k+3;
                }

            }
            else{
                continue;
            }

        }
    }

    else if(i==5)
    {

        for(l=2; l<=6; l++)
        {
            if(arr[m][l]==1)
            {
                if(l<=4)
                {
                    if((arr[m][l-2]==1)&&(arr[m][l-1]==1)&&(arr[m][l]==1))
                    {
                        k=k+7;
                    }
                    else{
                        k=k+1;
                    }
                }
                else
                {
                    k=k+1;
                }
            }
            else if(arr[m][l]==2)
            {
                 if(l<=4)
                {
                    if((arr[m][l-2]==2)&&(arr[m][l-1]==2)&&(arr[m][l]==2))
                    {
                        k=k+8;
                    }
                    else{
                        k=k+3;
                    }
                }
                else
                {
                    k=k+3;
                }

            }
            else{
                continue;
            }

        }
    }
    else if(i==6)
    {

        for(l=3; l<=6; l++)
        {
            if(arr[m][l]==1)
            {
                if(l<=5)
                {
                    if((arr[m][l-2]==1)&&(arr[m][l-1]==1)&&(arr[m][l]==1))
                    {
                        k=k+7;
                    }
                    else{
                        k=k+1;
                    }
                }
                else
                {
                    k=k+1;
                }
            }
            else if(arr[m][l]==2)
            {
                if(l<=5)
                {
                    if((arr[m][l-2]==2)&&(arr[m][l-1]==2)&&(arr[m][l]==2))
                    {
                        k=k+8;
                    }
                    else{
                        k=k+3;
                    }
                }
                else
                {
                    k=k+3;
                }
            }
            else{
                continue;
            }

        }
    }
    else
    {
        for(l=0; l<=6; l++)
        {
           //console.log("arr "+arr[m][l]+ "m="+m+"l="+l);
            if(arr[m][l] == 1)
            {
               if(l<=2)
                {
                    if((arr[m][l-2]==1)&&(arr[m][l-1]==1)&&(arr[m][l]==1))
                    {
                        k=k+7;
                    }
                    else{
                        k=k+1;
                    }
                }
                else
                {
                    k=k+1;
                }
            }
            else if(arr[m][l]==2)
            {
                if(l<=2)
                {
                    if((arr[m][l-2]==2)&&(arr[m][l-1]==2)&&(arr[m][l]==2))
                    {
                        k=k+8;
                    }
                    else{
                        k=k+3;
                    }
                }
                else
                {
                    k=k+3;
                }
            }
            else{
                continue;
            }

        }

    }
}
    return k;

}




function check_win_vertical(arr){
      i=0,j=0;
       var w=0,m=0;
    for(m=0; m<=6; m++)
    {
        for(i=0; i<=5; i++)
        {
            if(i<=2)
            {
                  if((arr[i+3][m]==1)&&(arr[i+2][m]==1)&&(arr[i+1][m]==1)&&(arr[i][m]==1))
                  {
                     w=1;
                     break;
                  }

                  else if((arr[i+3][m]==2)&&(arr[i+2][m]==2)&&(arr[i+1][m]==2)&&(arr[i][m]==2))
                  {
                     w=2;
                     break;
                  }
                  else{
                    continue;
                  }
            }

        }

        if(w==1|| w==2){
            break;
        }
    }
    return w;

}



function check_win_horizontal( arr)
{
     i=0,j=0;
      var w=0;
   for(i=0;i<=5;i++)
   {
       for(j=0;j<=6;j++)
       {
           if(j>=3)
           {
                if((arr[i][j-3]==1)&&(arr[i][j-2]==1)&&(arr[i][j-1]==1)&&(arr[i][j]==1))
                {
                    w=1;
                    break;
                }
                else if((arr[i][j-3]==2)&&(arr[i][j-2]==2)&&(arr[i][j-1]==2)&&(arr[i][j]==2))
                {
                    w=2;
                    break;
                }
                else{
                    continue;
                }

           }
       }

       if((w==1)||(w==2))
       {

           break;
       }
   }
   return w;
}



function check_win_diagonal_left(arr)
{
   i=0,j=0;
    var r=0,w=0,c1=0;

    for(r=0; r<=2; r++)
    {
        for(i=r,j=0; (i<=5 && j<(6-r)); i++,j++)
        {
            if(arr[i][j]==1)
            {
                c1=c1+1;
                if(c1==4)
                {
                    w=1;
                    break;
                }
            }
            else
            {
                c1=0;
            }
        }

        if(w==1|| w==2)
        {
            break;
        }

        for(i=r,j=0; (i<=5 && j<(6-r)); i++,j++)
        {
            if(arr[i][j]==1)
            {
                c1=c1+1;
                if(c1==4)
                {
                    w=2;
                    break;
                }
            }
            else
            {
                c1=0;
            }
        }
        if(w==1|| w==2)
        {
            break;
        }
    }

    if(w!=1|| w!=2)
    {

        for(r=1; r<=3; r++)
        {
            for(i=0,j=r; (i<=6-r && j<=6); i++,j++)
            {
                if(arr[i][j]==1)
                {
                    c1=c1+1;
                    if(c1==4)
                    {
                        w=1;
                        break;
                    }
                }
                else
                {
                    c1=0;
                }
            }
            if(w==1|| w==2)
            {
                break;
            }

            if(w!=1|| w!=2)
                {
                    for(i=0,j=r; (i<=6-r && j<=6); i++,j++)
                    {
                        if(arr[i][j]==1)
                        {
                            c1=c1+1;
                            if(c1==4)
                            {
                                w=1;
                                break;
                            }
                        }
                        else
                        {
                            c1=0;
                        }
                    }
                    if(w==1|| w==2)
                    {
                        break;
                    }

                }
        }


    }

return w;
}


function check_win_diagonal_right( arr )
{
     i=0,j=0;
   var r=0,w=0,c1=0;


    for(r=3; r<=5; r++)
    {
        for(i=0,j=r; (i<=r && j>=0); i++,j--)
        {
            if(arr[i][j]==1)
            {
                c1=c1+1;
                if(c1==4)
                {
                    w=1;
                    break;
                }
            }
            else
            {
                c1=0;
            }

        }
         if(w==1 || w==2){
            break;
        }
        else{

            for(i=0,j=r; (i<=r && j>=0); i++,j--)
            {
                if(arr[i][j]==1)
                {
                    c1=c1+1;
                    if(c1==4)
                    {
                        w=2;
                        break;
                    }
                }
                else
                {
                    c1=0;
                }

            }
            if(w==1 || w==2)
            {
                break;
            }

        }
    }

    r=0;
    for(r=0; r<=2; r++)
    {
        for(i=r,j=6; (i<=5 && j>r); i++,j--)
        {
             if(arr[i][j]==1)
            {
                c1=c1+1;
                if(c1==4)
                {
                    w=1;
                    break;
                }
            }
            else
            {
                c1=0;
            }


        }
         if(w==1|| w==2){
            break;
        }
        else
        {
            for(i=r,j=6; (i<=5 && j>r); i++,j--)
            {
                if(arr[i][j]==1)
                {
                    c1=c1+1;
                    if(c1==4)
                    {
                        w=1;
                        break;
                    }
                }
                else
                {
                    c1=0;
                }


            }
            if(w==1|| w==2)
            {
                break;
            }
        }

    }

  return w;
}



function lastemptycol_ai(arr, i)
{
    var j,k=10;

    for(j=5; j>=0; j--)
    {
        if((arr[j][i]==1)||(arr[j][i]==2))
        {
            continue;
        }
        else
        {
            k=j;
            break;
        }
    }
    return k;
}



function   findLastEmptyCell(a) {
    for(i=36; i >= a ; i=i-7)
    {
      if( store[i] == 0){
            store[i] = 1;
           return i;
          break;
     }
      else{
            continue;
        }
    }
   return 100;
}


function   findLastEmptyCell2(a) {
    for(i=37; i >= a ; i=i-7)
    {
      if( store[i] == 0){
            store[i] = 1;
           return i;
          break;
     }
      else{
            continue;
        }
    }
   return 100;
}

function   findLastEmptyCell3(a) {
    for(i=38; i >= a ; i=i-7)
    {
      if( store[i] == 0){
            store[i] = 1;
           return i;
          break;
     }
      else{
            continue;
        }
    }
   return 100;
}


function   findLastEmptyCell4(a) {
    for(i=39; i >= a ; i=i-7)
    {
      if( store[i] == 0){
            store[i] = 1;
           return i;
          break;
     }
      else{
            continue;
        }
    }
   return 100;
}


     
function   findLastEmptyCell5(a) {
    for(i=40; i >= a ; i=i-7)
    {
      if( store[i] == 0){
            store[i] = 1;
           return i;
          break;
     }
      else{
            continue;
        }
    }
   return 100;
}



     
function   findLastEmptyCell6(a) {
    for(i=41; i >= a ; i=i-7)
    {
      if( store[i] == 0){
            store[i] = 1;
           return i;
          break;
     }
      else{
            continue;
        }
    }
   return 100;
}


function   findLastEmptyCell7(a) {
    for(i=42; i >= a ; i=i-7)
    {
      if( store[i] == 0){
            store[i] = 1;
           return i;
          break;
     }
      else{
            continue;
        }
    }
   return 100;
}

   function ai_move(){

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
           var col=0, hor=0, ver = 0;
           var m=0,n=0,k=0,col=0 ,v=0,r=0,size=0,loop1=0,max=-1,ina =-1;

           for(i=0; i<=6; i++)
            {
                col = lastemptycol_ai(arr,i);
                row[i]=col;
                colum[i]=i;

                //console.log("col =  "+col+" i="+i );
            }
              
             for(i=0 ; i<=6; i++)
            {
                hor = horizontal(row,arr,i);
                hori[i]=hor;
                ver = vertical(row,arr,i);
                //console.log("hor="+hor+"ver="+ver);
                verti[i] = ver;
                av[i] = (hor+ver);
                //console.log("av="+av[i]);
            }
            
            
                    
            max = av[0];
            ina = 0;
            for(i=0 ;i<7 ;i++)
            {
                if(av[i] > max)
                {
                    max = av[i];
                    ina = i;
                }
            }


          /* for(i=0;i<7;i++)
           {
               printf("hor=%d , ver=%d \n",hori[i],verti[i]);
           }*/


           // size = sizeof(row)/sizeof(row[0]);
             
             size = row.length;

            for(r=0; r<size; r++)
            {
                cop[r]=row[r];
            }
            //cout<<size<<endl;


            for(i=0; i<=6; i++)
            {
                if(i==ina)
                {
                    m = row[i];
                    if((arr[m][i] != 1)||(arr[m][i] != 2))
                    {
                        arr[m][i]=2;

                       // console.log("m="+m);

                        loop1=1;

                         if(m==0 && i==0){
                            store[1] =1;
                            $("#1").css("backgroundColor", "red");
                        }
                         else if(m==1 && i==0){
                            store[8] = 1;
                            $("#8").css("backgroundColor", "red");
                        }
                         else if(m==2 && i==0){
                            store[15] = 1;
                            $("#15").css("backgroundColor", "red");
                        }
                        
                          else if(m==3 && i==0){
                            store[22] = 1;
                            $("#22").css("backgroundColor", "red");
                        }
                         
                         else if(m==4 && i==0){
                            store[29] = 1;
                            $("#29").css("backgroundColor", "red");
                        }

                          else if(m==5 && i==0){
                            store[36] = 1;
                            $("#36").css("backgroundColor", "red");
                        }

                        else if(m==0 && i==1){
                            store[2] = 1;
                            $("#2").css("backgroundColor", "red");
                        }
                       
                       else if(m==1 && i==1){
                            store[9] = 1;
                            $("#9").css("backgroundColor", "red");
                        }
                       
                        else if(m==2 && i==1){
                            store[16] = 1;
                            $("#16").css("backgroundColor", "red");
                        }
                          else if(m==3 && i==1){
                            store[23] = 1;
                            $("#23").css("backgroundColor", "red");
                        }
                         
                        else if(m==4 && i==1){
                            store[30] = 1;
                            $("#30").css("backgroundColor", "red");
                        }
                       
                       else if(m==5 && i==1){
                         store[37] = 1;
                            $("#37").css("backgroundColor", "red");
                        }
                       
                        else if(m==0 && i==2){
                         store[3] = 1;
                            $("#3").css("backgroundColor", "red");
                        }
                         else if(m==1 && i==2){
                            store[10] = 1;
                            $("#10").css("backgroundColor", "red");
                        }
                       else if(m==2 && i==2){
                         store[17] = 1;
                            $("#17").css("backgroundColor", "red");
                        }
                       else if(m==3 && i==2){
                         store[24] = 1;
                            $("#24").css("backgroundColor", "red");
                        }
                        else if(m==4 && i==2){
                         store[31] = 1;
                            $("#31").css("backgroundColor", "red");
                        }
                          else if(m==5 && i==2){
                            store[38] = 1;
                            $("#38").css("backgroundColor", "red");
                        }
                       else if(m==0 && i==3){
                            store[4] = 1;
                            $("#4").css("backgroundColor", "red");
                        }
                       else if(m==1 && i==3){
                            store[11] = 1;
                            $("#11").css("backgroundColor", "red");
                        }
                         else if(m==2 && i==3){
                            store[18] = 1;
                            $("#18").css("backgroundColor", "red");
                        }
                          else if(m==3 && i==3){
                            store[25] = 1;
                            $("#25").css("backgroundColor", "red");
                        }
                        else if(m==4 && i==3){
                            store[32] = 1;
                            $("#32").css("backgroundColor", "red");
                        }
                        else if(m==5 && i==3){
                            store[39] = 1;
                            $("#39").css("backgroundColor", "red");
                        }
                         else if(m==0 && i==4){
                            store[5] = 1;
                            $("#5").css("backgroundColor", "red");
                        }
                        else if(m==1 && i==4){
                            store[12] = 1;
                            $("#12").css("backgroundColor", "red");
                        }
                        else if(m==2 && i==4){
                            store[19] = 1;
                            $("#19").css("backgroundColor", "red");
                        }
                        else if(m==3 && i==4){
                            store[26] = 1;
                            $("#26").css("backgroundColor", "red");
                        }
                       else if(m==4 && i==4){
                            store[33] = 1;
                            $("#33").css("backgroundColor", "red");
                        }
                          else if(m==5 && i==4){
                            store[40] = 1;
                            $("#40").css("backgroundColor", "red");
                        }
                         else if(m==0 && i==5){
                            store[6] = 1;
                            $("#6").css("backgroundColor", "red");
                        }
                        else if(m==1 && i==5){
                            store[13] = 1;
                            $("#13").css("backgroundColor", "red");
                        }
                         else if(m==2 && i==5){
                            store[20] = 1;
                            $("#20").css("backgroundColor", "red");
                        }
                        else if(m==3 && i==5){
                            store[27] = 1;
                            $("#27").css("backgroundColor", "red");
                        }
                         else if(m==4 && i==5){
                            store[34] = 1;
                            $("#34").css("backgroundColor", "red");
                        }
                          else if(m==5 && i==5){
                            store[41] = 1;
                            $("#41").css("backgroundColor", "red");
                        }
                         else if(m==0 && i==6){
                            store[7] = 1;
                            $("#7").css("backgroundColor", "red");
                        }
                        else if(m==1 && i==6){
                            store[14] = 1;
                            $("#14").css("backgroundColor", "red");
                        }
                         else if(m==2 && i==6){
                            store[21] = 1;
                            $("#21").css("backgroundColor", "red");
                        }
                          else if(m==3 && i==6){
                            store[28] = 1;
                            $("#28").css("backgroundColor", "red");
                        }
                        else if(m==4 && i==6){
                            store[35] = 1;
                            $("#35").css("backgroundColor", "red");
                        }
                         else if(m==5 && i==6){
                            store[42] = 1;
                            $("#42").css("backgroundColor", "red");
                        }

                        break;
                    }
                }
                if(loop1==1){
                    break;
                }
            }

            if(loop1==1)
            {

                win = check_win_horizontal(arr);
                win1 = check_win_vertical(arr);
                win2 = check_win_diagonal_left(arr);
                win3 =  check_win_diagonal_right(arr);

                // printf(" win=%d win1=%d win2=%d win3=%d \n",win,win1,win2,win3);

                if((win==1) || (win1==1) || (win2==1) || (win3==1) )
                {
                      alert("Human is win ");
                   //console.log("Human is win");
                   // printf("Human is win . \n");
                   // k=100;
                    //break;
                }

                if((win==2) || (win1==2) || (win2==2) || (win3==1))
                {
                   // printf("Computer is win. \n");
                   // k=100;

                     alert("Computer is win ");
                  //  console.log("Computer is win");

                    //break;
                }

            }


     }

//console.log(arr[6][7]);

//console.log("length = "+arr.length);
console.log("slength = "+store.length);


    $("#1").click(function(){
        
       var cell = findLastEmptyCell(1);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
          if(cell == 1){
             arr[0][0] = 1;
        }
        else if(cell == 8){
             arr[1][0] = 1;
        }
        else if(cell == 15){
             arr[2][0] = 1;
        }
        
         else if(cell == 22){
             arr[3][0] = 1;
        }
        
        else if(cell == 29){
             arr[4][0] = 1;
        }

         else if(cell == 36){
             arr[5][0] = 1;
        }



         
            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");
                 
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                 alert("Computer is win ");
            }

            var mno = ai_move();

     }    



    });

     $("#8").click(function(){
        
       var cell = findLastEmptyCell(8);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
         
        if(cell == 8){
             arr[1][0] = 1;
        }
        else if(cell == 15){
             arr[2][0] = 1;
        }
        
         else if(cell == 22){
             arr[3][0] = 1;
        }
        
        else if(cell == 29){
             arr[4][0] = 1;
        }

         else if(cell == 36){
             arr[5][0] = 1;
        }



               var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");

            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                 alert("Computer is win ");
            }

            var mno = ai_move();

     }
        
         

    });

     $("#15").click(function(){
        
       var cell = findLastEmptyCell(15);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
         
        if(cell == 15){
             arr[2][0] = 1;
        }
        
         else if(cell == 22){
             arr[3][0] = 1;
        }
        
        else if(cell == 29){
             arr[4][0] = 1;
        }

         else if(cell == 36){
             arr[5][0] = 1;
        }


            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                alert("Human is win ");

            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                  alert("Computer is win ");
            }

            var mno = ai_move();

     }
        
         

    });
   
      $("#22").click(function(){
        
       var cell = findLastEmptyCell(22);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");

         if(cell == 22){
             arr[3][0] = 1;
        }
        
        else if(cell == 29){
             arr[4][0] = 1;
        }

         else if(cell == 36){
             arr[5][0] = 1;
        }


             var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
                  alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                  alert("Computer is win ");
            }

            var mno = ai_move();


     }

          
        
    });


       $("#29").click(function(){
        
       var cell = findLastEmptyCell(29);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        
         if(cell == 29){
             arr[4][0] = 1;
        }

         else if(cell == 36){
             arr[5][0] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");
               
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }
    
       


  
    });


        $("#36").click(function(){
        
       var cell = findLastEmptyCell(36);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        

        if(cell == 36){
             arr[5][0] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
                 alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }

         
  
    });




    $("#2").click(function(){
         
       var cell = findLastEmptyCell2(2);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
          if(cell == 2){
             arr[0][1] = 1;
        }
        else if(cell == 9){
             arr[1][1] = 1;
        }
        else if(cell == 16){
             arr[2][1] = 1;
        }
        
         else if(cell == 23){
             arr[3][1] = 1;
        }
        
        else if(cell == 30){
             arr[4][1] = 1;
        }

         else if(cell == 37){
             arr[5][1] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                  alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                  alert("Computer is win ");
            }

            var mno = ai_move();

     }

      
        
    }); 

      $("#9").click(function(){
         
       var cell = findLastEmptyCell2(9);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
          
         if(cell == 9){
             arr[1][1] = 1;
        }
        else if(cell == 16){
             arr[2][1] = 1;
        }
        
         else if(cell == 23){
             arr[3][1] = 1;
        }
        
        else if(cell == 30){
             arr[4][1] = 1;
        }

         else if(cell == 37){
             arr[5][1] = 1;
        }


              var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                 alert("Computer is win ");
            }

            var mno = ai_move();

     }
     

    }); 

    
     $("#16").click(function(){
         
       var cell = findLastEmptyCell2(16);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
          
         
         if(cell == 16){
             arr[2][1] = 1;
        }
        
         else if(cell == 23){
             arr[3][1] = 1;
        }
        
        else if(cell == 30){
             arr[4][1] = 1;
        }

         else if(cell == 37){
             arr[5][1] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                alert("Human is win ");

            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                 alert("Computer is win ");
            }

            var mno = ai_move();

     }

     
    }); 

     $("#23").click(function(){
         
       var cell = findLastEmptyCell2(23);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        
         if(cell == 23){
             arr[3][1] = 1;
        }
        
        else if(cell == 30){
             arr[4][1] = 1;
        }

         else if(cell == 37){
             arr[5][1] = 1;
        }

           var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                 alert("Computer is win ");
            }

            var mno = ai_move();

     }
     
    }); 

          $("#30").click(function(){
         
       var cell = findLastEmptyCell2(30);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        
         if(cell == 30){
             arr[4][1] = 1;
        }

         else if(cell == 37){
             arr[5][1] = 1;
        }


            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                 alert("Computer is win ");
            }

            var mno = ai_move();

     }

     
    }); 

       $("#37").click(function(){
         
       var cell = findLastEmptyCell2(37);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        
         if(cell == 37){
             arr[5][1] = 1;
        }


              var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }

    }); 


   $("#3").click(function(){
         
       var cell = findLastEmptyCell3(3);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
          if(cell == 3){
             arr[0][2] = 1;
        }
        else if(cell == 10){
             arr[1][2] = 1;
        }
        else if(cell == 17){
             arr[2][2] = 1;
        }
        
         else if(cell == 24){
             arr[3][2] = 1;
        }
        
        else if(cell == 31){
             arr[4][2] = 1;
        }

         else if(cell == 38){
             arr[5][2] = 1;
        }


             var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
               alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                 alert("Computer is win ");
            }

            var mno = ai_move();

     } 


 
    }); 


     $("#10").click(function(){
         
       var cell = findLastEmptyCell3(10);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");

          if(cell == 10){
             arr[1][2] = 1;
        }
        else if(cell == 17){
             arr[2][2] = 1;
        }
        
         else if(cell == 24){
             arr[3][2] = 1;
        }
        
        else if(cell == 31){
             arr[4][2] = 1;
        }

         else if(cell == 38){
             arr[5][2] = 1;
        }


              var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");
                 
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                  alert("Computer is win ");
            }

            var mno = ai_move();

     }
   
    }); 

      $("#17").click(function(){
         
       var cell = findLastEmptyCell3(17);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");

          if(cell == 17){
             arr[2][2] = 1;
        }
        
         else if(cell == 24){
             arr[3][2] = 1;
        }
        
        else if(cell == 31){
             arr[4][2] = 1;
        }

         else if(cell == 38){
             arr[5][2] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
                alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                 alert("Computer is win ");
            }

            var mno = ai_move();

     }
   
    }); 

      $("#24").click(function(){
         
       var cell = findLastEmptyCell3(24);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
      
          if(cell == 24){
             arr[3][2] = 1;
        }
        
        else if(cell == 31){
             arr[4][2] = 1;
        }

         else if(cell == 38){
             arr[5][2] = 1;
        }

              var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }
   
    }); 


      $("#31").click(function(){
         
       var cell = findLastEmptyCell3(31);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");  
        
         if(cell == 31){
             arr[4][2] = 1;
        }

         else if(cell == 38){
             arr[5][2] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
                 alert("Human is win ");
                 
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                alert("Computer is win ");
               
            }

            var mno = ai_move();

     }
   
    }); 

     $("#38").click(function(){
         
       var cell = findLastEmptyCell3(38);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");  

          if(cell == 38){
             arr[5][2] = 1;
        }

             var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
               alert("Computer is win ");

            }

            var mno = ai_move();

     }
       
   
    }); 

    $("#4").click(function(){
         
       var cell = findLastEmptyCell4(4);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
          if(cell == 4){
             arr[0][3] = 1;
        }
        else if(cell == 11){
             arr[1][3] = 1;
        }
        else if(cell == 18){
             arr[2][3] = 1;
        }
        
         else if(cell == 25){
             arr[3][3] = 1;
        }
        
        else if(cell == 32){
             arr[4][3] = 1;
        }

         else if(cell == 39){
             arr[5][3] = 1;
        }

               var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }

        
    }); 

 $("#11").click(function(){
         
       var cell = findLastEmptyCell4(11);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        
       if(cell == 11){
             arr[1][3] = 1;
        }
        else if(cell == 18){
             arr[2][3] = 1;
        }
        
         else if(cell == 25){
             arr[3][3] = 1;
        }
        
        else if(cell == 32){
             arr[4][3] = 1;
        }

         else if(cell == 39){
             arr[5][3] = 1;
        }

           var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                  alert("Computer is win ");
            }

            var mno = ai_move();

     }

   
    }); 
 
     $("#18").click(function(){
         
       var cell = findLastEmptyCell4(18);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        
       
         if(cell == 18){
             arr[2][3] = 1;
        }
        
         else if(cell == 25){
             arr[3][3] = 1;
        }
        
        else if(cell == 32){
             arr[4][3] = 1;
        }

         else if(cell == 39){
             arr[5][3] = 1;
        }

             var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");

            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }

    }); 

     $("#25").click(function(){
         
       var cell = findLastEmptyCell4(25);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
       
         if(cell == 25){
             arr[3][3] = 1;
        }
        
        else if(cell == 32){
             arr[4][3] = 1;
        }

         else if(cell == 39){
             arr[5][3] = 1;
        }

           var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
                  alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                 alert("Computer is win ");
            }

            var mno = ai_move();

     }

        
    }); 


      $("#32").click(function(){
         
       var cell = findLastEmptyCell4(32);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
      
         if(cell == 32){
             arr[4][3] = 1;
        }

         else if(cell == 39){
             arr[5][3] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
                 alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                 alert("Computer is win ");

            }

            var mno = ai_move();

     }

       
    }); 


     $("#39").click(function(){
         
       var cell = findLastEmptyCell4(39);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");

         if(cell == 39){
             arr[5][3] = 1;
        }

           var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                  alert("Human is win ");

            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                  alert("Computer is win ");

            }

            var mno = ai_move();

     }
   
        
    }); 



  $("#5").click(function(){
         
       var cell = findLastEmptyCell5(5);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
          if(cell == 5){
             arr[0][4] = 1;
        }
        else if(cell == 12){
             arr[1][4] = 1;
        }
        else if(cell == 19){
             arr[2][4] = 1;
        }
        
         else if(cell == 26){
             arr[3][4] = 1;
        }
        
        else if(cell == 33){
             arr[4][4] = 1;
        }

         else if(cell == 40){
             arr[5][4] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                  alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
               alert("Computer is win ");
            }

            var mno = ai_move();

     }
  
    }); 

    
    
  $("#12").click(function(){
         
       var cell = findLastEmptyCell5(12);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        
        if(cell == 12){
             arr[1][4] = 1;
        }
        else if(cell == 19){
             arr[2][4] = 1;
        }
        
         else if(cell == 26){
             arr[3][4] = 1;
        }
        
        else if(cell == 33){
             arr[4][4] = 1;
        }

         else if(cell == 40){
             arr[5][4] = 1;
        }

           var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
                 alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }

  
    }); 


    $("#19").click(function(){
         
       var cell = findLastEmptyCell5(19);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        
        if(cell == 19){
             arr[2][4] = 1;
        }
        
         else if(cell == 26){
             arr[3][4] = 1;
        }
        
        else if(cell == 33){
             arr[4][4] = 1;
        }

         else if(cell == 40){
             arr[5][4] = 1;
        }

              var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
               alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                 alert("Computer is win ");
            }

            var mno = ai_move();

     }  
  
    }); 


     $("#26").click(function(){
         
       var cell = findLastEmptyCell5(26);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        
      
         if(cell == 26){
             arr[3][4] = 1;
        }
        
        else if(cell == 33){
             arr[4][4] = 1;
        }

         else if(cell == 40){
             arr[5][4] = 1;
        }

           var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }

    }); 

     
     $("#33").click(function(){
         
       var cell = findLastEmptyCell5(33);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        
         if(cell == 33){
             arr[4][4] = 1;
        }

         else if(cell == 40){
             arr[5][4] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }

  
    }); 

     
    $("#40").click(function(){
         
       var cell = findLastEmptyCell5(40);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
       
         if(cell == 40){
             arr[5][4] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }
  
    }); 


     
  $("#6").click(function(){
         
       var cell = findLastEmptyCell6(6);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
          if(cell == 6){
             arr[0][5] = 1;
        }
        else if(cell == 13){
             arr[1][5] = 1;
        }
        else if(cell == 20){
             arr[2][5] = 1;
        }
        
         else if(cell == 27){
             arr[3][5] = 1;
        }
        
        else if(cell == 34){
             arr[4][5] = 1;
        }

         else if(cell == 41){
             arr[5][5] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
                alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
               alert("Computer is win ");
            }

            var mno = ai_move();

     }

        
  
    }); 

    
       
  $("#13").click(function(){
         
       var cell = findLastEmptyCell6(13);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
         
         if(cell == 13){
             arr[1][5] = 1;
        }
        else if(cell == 20){
             arr[2][5] = 1;
        }
        
         else if(cell == 27){
             arr[3][5] = 1;
        }
        
        else if(cell == 34){
             arr[4][5] = 1;
        }

         else if(cell == 41){
             arr[5][5] = 1;
        }

          var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                  alert("Computer is win ");
            }

            var mno = ai_move();

     }
  
    }); 

   
           
  $("#20").click(function(){
         
       var cell = findLastEmptyCell6(20);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
         
         if(cell == 20){
             arr[2][5] = 1;
        }
        
         else if(cell == 27){
             arr[3][5] = 1;
        }
        
        else if(cell == 34){
             arr[4][5] = 1;
        }

         else if(cell == 41){
             arr[5][5] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");

            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                  alert("Computer is win ");
            }

            var mno = ai_move();

     }

          
    }); 


              
  $("#27").click(function(){
         
       var cell = findLastEmptyCell6(27);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        
         if(cell == 27){
             arr[3][5] = 1;
        }
        
        else if(cell == 34){
             arr[4][5] = 1;
        }

         else if(cell == 41){
             arr[5][5] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
                alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                 alert("Computer is win ");
            }

            var mno = ai_move();

     } 
    }); 


                
  $("#34").click(function(){
         
       var cell = findLastEmptyCell6(34);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
       
         if(cell == 34){
             arr[4][5] = 1;
        }

         else if(cell == 41){
             arr[5][5] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
                 alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }

  
    }); 


     $("#41").click(function(){
         
       var cell = findLastEmptyCell6(41);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
       
         if(cell == 41){
             arr[5][5] = 1;
        }

              var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
               alert("Computer is win ");
            }

            var mno = ai_move();

     }
  
    }); 



     /*$("#2").click(function(){
         
              $("#2").css("backgroundColor", "red");
    });*/



        
  $("#7").click(function(){
         
       var cell = findLastEmptyCell7(7);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
          if(cell == 7){
             arr[0][6] = 1;
        }
        else if(cell == 14){
             arr[1][6] = 1;
        }
        else if(cell == 21){
             arr[2][6] = 1;
        }
        
         else if(cell == 28){
             arr[3][6] = 1;
        }
        
        else if(cell == 35){
             arr[4][6] = 1;
        }

         else if(cell == 42){
             arr[5][6] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                  alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                alert("Computer is win ");

            }

            var mno = ai_move();

     } 
 
    }); 


       $("#14").click(function(){
         
       var cell = findLastEmptyCell7(14);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
          
         if(cell == 14){
             arr[1][6] = 1;
        }
        else if(cell == 21){
             arr[2][6] = 1;
        }
        
         else if(cell == 28){
             arr[3][6] = 1;
        }
        
        else if(cell == 35){
             arr[4][6] = 1;
        }

         else if(cell == 42){
             arr[5][6] = 1;
        }

         var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }
  
    }); 


       $("#21").click(function(){
         
       var cell = findLastEmptyCell7(21);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
          
         
         if(cell == 21){
             arr[2][6] = 1;
        }
        
         else if(cell == 28){
             arr[3][6] = 1;
        }
        
        else if(cell == 35){
             arr[4][6] = 1;
        }

         else if(cell == 42){
             arr[5][6] = 1;
        }


  var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
                 alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
               alert("Computer is win ");
            }

            var mno = ai_move();

     }

          
  
    }); 


      $("#28").click(function(){
         
       var cell = findLastEmptyCell7(28);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        
          if(cell == 28){
             arr[3][6] = 1;
        }
        
        else if(cell == 35){
             arr[4][6] = 1;
        }

         else if(cell == 42){
             arr[5][6] = 1;
        }


            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
                  alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
               // console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }

          
  
    }); 


      $("#35").click(function(){
         
       var cell = findLastEmptyCell7(35);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");
        
         if(cell == 35){
             arr[4][6] = 1;
        }

         else if(cell == 42){
             arr[5][6] = 1;
        }

           var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
                //console.log("Human is win");
                 alert("Human is win ");
            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                 alert("Computer is win ");
            }

            var mno = ai_move();

     }
  
    }); 

  $("#42").click(function(){
         
       var cell = findLastEmptyCell7(42);  
          console.log("cell="+cell);

         if(cell != 100){
          // console.log("cell1="+cell);
          $('#'+cell).css("backgroundColor", "blue");

         if(cell == 42){
             arr[5][6] = 1;
        }

            var win=0, win1 = 0, win2 = 0, win3 = 0; 
               win = check_win_horizontal(arr);
               win1 = check_win_vertical(arr);
               win2 = check_win_diagonal_left(arr);
               win3 =  check_win_diagonal_right(arr);
         
          if((win==1)||(win1==1)||(win2==1)||(win3==1))
            {
               // console.log("Human is win");
                alert("Human is win ");

            }
         
           if((win==2)||(win1==2)||(win2==2)||(win3==2))
            {
                //console.log("computer is win");
                alert("Computer is win ");
            }

            var mno = ai_move();

     }

  
    }); 


/*
   $("#42").click(function(){
         //alert("this is ok");
          $("#42").css("backgroundColor", "blue");
           store[42]=1;
            console.log("arr= "+store[42]);
         a=1;
         if(store[42]==1){
              $("#41").css("backgroundColor", "red");
          }
        //$(this).hide();
    });

*/


});
