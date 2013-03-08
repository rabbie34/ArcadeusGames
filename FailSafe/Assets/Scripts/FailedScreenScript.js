#pragma strict
var menuButton : GameObject;
var tryAgain : GameObject;

private var instructor : boolean = false;

function Start () {

}

function Update () {

if (Input.GetMouseButtonDown(0))
	{
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit = new RaycastHit();
		if (Physics.Raycast(ray, hit)) 
		{
			if (hit.collider.gameObject.name=="mainMenu")
			{
				Application.LoadLevel("Menu");
			}
			
			if (hit.collider.gameObject.name=="Resume")
			{
				if(GameObject.Find("Main Camera").GetComponent(PauseScript) != null)
				{
					GameObject.Find("Main Camera").GetComponent(PauseScript).unPause();
				}
				Application.LoadLevel("Test Level");
			}
			
			if (hit.collider.gameObject.name=="noteTaking")
			{
				Application.OpenURL("http://www.gcu.ac.uk/student/coursework/academicwriting/note-taking/");
			}
			
			if (hit.collider.gameObject.name=="studentHealth")
			{
				Application.OpenURL("http://www.nhs.uk/Livewell/studenthealth/Pages/Studenthealthhome.aspx");
			}
		}
	}
	
	

}