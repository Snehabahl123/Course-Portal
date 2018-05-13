<!DOCTYPE html>
<%@ page import = "java.sql.*,java.io.*,java.util.*" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%
String firstname=request.getParameter("firstname");
String lastname=request.getParameter("lastname");
String gender=request.getParameter("gender");
String pno=request.getParameter("pno");
String email=request.getParameter("email");
String password=request.getParameter("password");

try
{
Class.forName("com.mysql.jdbc.Driver");
Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/course_portal", "root", "0609");
Statement st=conn.createStatement();

int i=st.executeUpdate("insert into info(first_name,last_name,gender,phone_number,email_id,password)values('"+firstname+"','"+lastname+"','"+gender+"','"+pno+"','"+email+"','"+password+"')");
out.println("Thank you for joining Course Portal!!!");
}

catch(Exception e)
{
System.out.print(e);
e.printStackTrace();
}
%> 

<html>
<head>
<title> Welcome </title>
</head>
<body>
<div style="color:blue; font-size:30px; border-bottom-style: solid; background-image: url('backgrounds/b1.png');height:70px;">
<b></br> Welcome </b>
</div>
<p style="font-size:18px;"><b> <%out.print(request.getParameter("firstname"));%> <%out.print(request.getParameter("lastname"));%></b>, welcome to <b>Course Portal</b></br></br>
The email-id you signed up with is:<b> <%out.print(request.getParameter("email"));%></b></br></br>
Your phone number is: <b> <%out.print(request.getParameter("pno"));%> </b> 
</p>
</body>
</html>

