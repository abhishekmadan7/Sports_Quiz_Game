var timeLeft = 60;
var start = false;
var score = 0;
var num = 18;
var name=false;
var timer;



var table = document.getElementById("table");

var Teams = [["Bayern Munich", "Dortmund", "Hertha Berlin"],["Augsburg", "Union Berlin", "Werder Bremen"],["Dusseldorf", "Eintracht Frankurt", "Freiburg"],["Hoffenheim", "Koln", "RB Leipzig"],["Bayer Leverkusen", "Mainz", "Monchengladbach"],["Paderborn","Schalke","Wolfsburg"]];

var foundTeams = new Array(Teams.length);

for (var k = 0; k < foundTeams.length; k++) 
{
  foundTeams[k] = new Array(Teams[0].length);
  for (var i = 0; i < foundTeams[0].length; i++)
  {
    foundTeams[k][i] = "";
  }
}

function updateTime() 
{
  if (timeLeft % 60 >= 10)
    {
        document.getElementById("time").innerHTML = Math.floor(timeLeft / 60) + ":" + (timeLeft % 60);
    }
  else
    {
        document.getElementById("time").innerHTML = Math.floor(timeLeft / 60) + ":0" + (timeLeft % 60);
    }
}

function decreaseTime()
{
  if (timeLeft > 0) 
  {  
    timeLeft--;
  }
  else 
  {
    gameOver();
  }
  updateTime();
}

function startTime()
{
  if(start==false)
  {
    timer = setInterval(decreaseTime,1000);
    start = true;
    document.getElementById("input").disabled = false;
    document.getElementById("str").innerHTML = "Pause";
    
  } 
  else 
  {
    clearInterval(timer);
    start = false;
    document.getElementById("str").innerHTML = "Resume";
    document.getElementById("input").disabled = true;
  }
}

function gameOver()
{
    document.getElementById("input").disabled = "false";
    clearInterval(timer);
    var timeUsed  = 60 - timeLeft;
    document.getElementById("gameresult").innerHTML= "Your Score is "+score+"/18. It took you "+timeUsed+" seconds."+document.getElementById("gameresult").innerHTML;
    var sco=score.toString();
    
    document.cookie=document.cookie+","+sco;
}

function update() 
{
  for (var k= 1; k< table.rows.length; k++) 
  {
    for (var i = 0; i < table.rows[i].cells.length; i++) 
    {
      table.rows[k].cells[i].innerHTML = foundTeams[k-1][i];
    }
  }
  document.getElementById("kk").innerHTML = "Score: " + score + "/18";
}

function checkText(x)
{
  for(var r=0;r<Teams.length;r++)
    {
      for(var c=0;c<Teams[0].length;c++)
        {
          var j=Teams[r][c].toLowerCase();
          if(x.toLowerCase().localeCompare(j) == 0 ||x.toLowerCase().localeCompare(j) == 0)
            {
                if(foundTeams[r][c].localeCompare(Teams[r][c])!=0)
                  {
                      foundTeams[r][c]=Teams[r][c];
                      score++;
                      document.getElementById("input").value="";
                      if(score==18)
                      {
                        gameOver();
                      }
                    break;
                      
                  }
            }
        }
    }
  update();
  console.log(Teams);
  console.log(foundTeams);
}
 
function restart()
{
  window.location.reload(true);
}


function highscore()
{
   var x= document.cookie.split(";");
  var s="";
  var j=0;
  for(var i=0;i<x.length;i++)
    {
        s+=x[i]
        var z= parseFloat(x[i]);
        if(j<z)
          j=z;
    }  
  if(s=="")
    alert("You have never played before")
  else
   alert("Your PastScore is "+ s+". Your Highest Score is "+j);
}





