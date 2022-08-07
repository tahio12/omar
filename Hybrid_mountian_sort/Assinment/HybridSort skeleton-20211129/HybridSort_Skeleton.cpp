#include <iostream>
using namespace std;

void printArray(int arr[], int size) {
	for (int i = 0; i < size; i++) {
		cout << arr[i] << " ";
	}
	cout << endl;
}

void hybridSort(int A[], int size) {
	
}

int main() {
	//You can use different arrays to test, of course
	int A[] = {10, 5, 3, 9, 8, 7, 6};
	int size = sizeof(A) / sizeof(int);

	cout << "Given array: ";
	printArray(A, size);

	hybridSort(A, size);

	cout << "Array sorted: ";
	printArray(A, size);

	return 0;
}
