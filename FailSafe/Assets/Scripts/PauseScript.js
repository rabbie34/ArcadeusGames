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
	
	var fingerCount = 0;
    for (var touch : Touch in Input.touches) {
        if (touch.phase != TouchPhase.Ended && touch.phase != TouchPhase.Canceled)
            fingerCount++;
        var pauseClick2: int = 1;
        var ray2 : Ray = Camera.main.ScreenPointToRay(touch.position);
		var hit2 : RaycastHit = new RaycastHit();
		
		if(gamePaused == false && pauseClick2 == 1)
		{
			Time.timeScale = 0.0;
			gamePaused = true;
			pauseClick2 = 0;
			Debug.Log("paused");
			pauseScreen = GameObject.Instantiate(pauseMenu, pauseLocation.transform.position, pauseLocation.transform.rotation);
			Resume = GameObject.Find("Resume");
		}
		
		if (Physics.Raycast(ray2, hit2)) 
		{
			if(gamePaused == true && pauseClick2 == 1 && hit2.collider.gameObject == Resume)
				{
					Time.timeScale = 1.0;
					gamePaused = false;
					pauseClick2 = 0;			
					Debug.Log("unpaused");
					Destroy(pauseScreen);
				}	
				if(gamePaused == true && pauseClick2 == 1 && hit2.collider.gameObject.name == "Quit")
				{
					Time.timeScale = 1.0;
					GameObject.Find("NumberGUI").GetComponent(NumberGUIScript).deleteAll();
					Application.LoadLevel("Menu");	
				}	
		}
    }

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
				if(gamePaused == true && pauseClick == 1 && hit.collider.gameObject.name == "Quit")
				{
					Time.timeScale = 1.0;
					GameObject.Find("NumberGUI").GetComponent(NumberGUIScript).deleteAll();
					Application.LoadLevel("Menu");	
				}	
		}
		
	}
		
	
	
}

function isPaused ()
{
	return gamePaused;
}