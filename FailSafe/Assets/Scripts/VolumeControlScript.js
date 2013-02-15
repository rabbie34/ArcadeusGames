#pragma strict

public var VolumeSwitch: GameObject;
public var VolumeOn: boolean;

public var OnTexture: Texture2D;
public var OffTexture: Texture2D;


function Start () {

VolumeSwitch.renderer.material.mainTexture = OnTexture;

}

function Update () {

		if (Input.GetMouseButtonDown(0))
		{
			var click: int = 1;
			var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			var hit : RaycastHit;
	
			if (Physics.Raycast(ray, hit, 100.0))
			{
				if (hit.collider.gameObject == VolumeSwitch && click == 1 && VolumeOn == true)
				{
					Debug.Log("Volume Off");
					VolumeOn = false;
					VolumeSwitch.renderer.material.mainTexture = OffTexture;
					click = 0;
				}
		
				if (hit.collider.gameObject == VolumeSwitch && click == 1 && VolumeOn == false)
				{
					Debug.Log("Volume On");
					VolumeOn = true;
					VolumeSwitch.renderer.material.mainTexture = OnTexture;
					click = 0;
				}
		
			}
	
		}

}