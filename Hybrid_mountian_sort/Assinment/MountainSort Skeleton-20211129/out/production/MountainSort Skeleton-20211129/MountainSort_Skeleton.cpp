//include as many libraries as you want
using namespace std;


void printArray(int arr[], int size) {
	for (int i = 0; i < size; i++) {
		cout << arr[i] << " ";
	}
	cout << endl;
}

//you can declare additional functions if you want 


void MountainSort(int A[], int size) {
	
}


int main() {
	int A[] = {34, 12, 7, 43, 55, 41, 97, 28, 2, 62};
	int size = sizeof(A) / sizeof(int);

	cout << "Given array: ";
	printArray(A, size);
	cout << endl;

	MountainSort(A, size);

	cout << endl;
	cout << "Array sorted: ";
	printArray(A, size);

	return 0;
}


