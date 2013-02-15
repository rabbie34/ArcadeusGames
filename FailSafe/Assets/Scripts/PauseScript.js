#pragma strict


var gamePaused: boolean;


function Start () 
{
	gamePaused = false;
}

function Update () 
{
	if(Input.GetMouseButtonDown(0) && gamePaused == false)
	{
		Time.timeScale = 0.0;
		gamePaused = true;
		Debug.Log("paused");	
	}
	else if(Input.GetMouseButtonDown(0) && gamePaused == true)
	{
		Time.timeScale = 1.0;
		gamePaused = false;
		Debug.Log("resumed");	
	}
	
}