import 'package:emamobile/employee_management.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
        child: ElevatedButton(
      onPressed: () {
        Navigator.of(context)
            .push(MaterialPageRoute(builder: (BuildContext context) {
          return const EmployeeManagementPage();
        }));
      },
      child: const Text('Learn Flutter'),
    ));
  }
}
