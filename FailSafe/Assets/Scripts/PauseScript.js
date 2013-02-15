#pragma strict


var gamePaused: boolean;

public var pauseLocation: GameObject;
public var pauseMenu: GameObject;

private var pauseScreen: GameObject;

public var Resume: GameObject;


function Start () 
{
	gamePaused = false;
}

function Update () 
{
	if(Input.GetMouseButtonDown(0))
	{	
		
		var pauseClick: int = 1;		
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit;	
		
		if(gamePaused == false && pauseClick == 1)
		{
			Time.timeScale = 0.0;
			gamePaused = true;
			pauseClick = 0;
			Debug.Log("paused");
			pauseScreen = GameObject.Instantiate(pauseMenu, pauseLocation.transform.position, pauseLocation.transform.rotation);
			Resume = GameObject.Find("Resume");
		}
		
		
		if (Physics.Raycast(ray, hit, 100.0))
		{	
					
				if(gamePaused == true && pauseClick == 1 && hit.collider.gameObject == Resume)
				{
					Time.timeScale = 1.0;
					gamePaused = false;
					pauseClick = 0;			
					Debug.Log("unpaused");
					Destroy(pauseScreen);
				}		
		}
		
	}
		
	
	
}