#pragma strict

var maxMoveSpeed = 3.0f;
var moveAcc = 1.0f;
var moveSpeed : float;
private var screenEdge = 1.4f;

function Start () {

}

function Update () {
	
	if (Input.GetKey(KeyCode.D))
	{
		//gameObject.transform.Translate(moveAcc*Time.deltaTime,0,0);
		moveSpeed = moveSpeed +  (moveAcc * Time.deltaTime*40);
	}
	
	if (Input.GetKey(KeyCode.A))
	{
		//gameObject.transform.Translate(-moveAcc*Time.deltaTime,0,0);
		moveSpeed = moveSpeed - (moveAcc * Time.deltaTime*40);
	}
	
	if (moveSpeed > maxMoveSpeed )
	{
		moveSpeed = maxMoveSpeed;
	}
	if (moveSpeed < -maxMoveSpeed )
	{
		moveSpeed = -maxMoveSpeed;
	}

}

function FixedUpdate ()
{
	if(moveSpeed != 0)
	{
		moveSpeed -= moveSpeed/5;
	}
	if(transform.position.x> screenEdge || transform.position.x < -screenEdge)
	{
		transform.position = Vector3(-transform.position.x,transform.position.y,0);
	}
	
	transform.Translate(moveSpeed * Time.deltaTime,0,0);
}