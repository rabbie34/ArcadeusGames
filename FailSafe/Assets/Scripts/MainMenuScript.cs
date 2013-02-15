using UnityEngine;
using System.Collections;

public class MainMenuScript : MonoBehaviour {
	
	public GameObject StartGameButton;
	public GameObject HowToPlayButton;
	public GameObject QuitButton;
	private GameObject Back;
	
	//public GameObject background;
	public GameObject instructionsPrefab;
	public GameObject instructionsSpawn;
	
	
	private bool instructor = false;
	private GameObject instructions;
	//private Game
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		
		
		if (Input.GetMouseButtonDown(0))
				{
				Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
				RaycastHit hit = new RaycastHit();
				if (Physics.Raycast(ray,out hit)) 
					{
					if (hit.collider.gameObject==StartGameButton && instructor == false)
						{
						Debug.Log("Start Game");
						Application.LoadLevel("Test Level");
						}
				
					if (hit.collider.gameObject==HowToPlayButton && instructor == false)
						{
						Debug.Log("How To Play");
						instructions = (GameObject)Instantiate(instructionsPrefab, instructionsSpawn.transform.position, instructionsSpawn.transform.rotation);
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
}
