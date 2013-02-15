#pragma strict

public var StartGameButton : GameObject;
public var HowToPlayButton : GameObject;
public var QuitButton : GameObject;
private var Back : GameObject;
	
	//public GameObject background;
public var instructionsPrefab : GameObject;
public var instructionsSpawn : GameObject;
	
	
private var instructor : boolean = false;
private var instructions : GameObject;
	//private Game

function Start () {

}

function Update () {
	
	if (Input.GetMouseButtonDown(0))
	{
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit = new RaycastHit();
		if (Physics.Raycast(ray, hit)) 
		{
			if (hit.collider.gameObject==StartGameButton && instructor == false)
			{
				Debug.Log("Start Game");
				Application.LoadLevel("Test Level");
			}
				
			if (hit.collider.gameObject==HowToPlayButton && instructor == false)
			{
				Debug.Log("How To Play");
				instructions = GameObject.Instantiate(instructionsPrefab, instructionsSpawn.transform.position, instructionsSpawn.transform.rotation);
				Back = GameObject.Find("Back");
				instructor = true;
			}
				
				
			if (hit.collider.gameObject==Back && instructor == true)
			{
				Debug.Log("Quit");
				Application.Quit();
				instructor = false;
				Destroy(instructions);
			}
				
			if (hit.collider.gameObject==QuitButton && instructor == false)
			{
				Debug.Log("Quit");
				Application.Quit();
			}
		}
	}
}