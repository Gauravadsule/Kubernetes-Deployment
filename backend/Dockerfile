# Use the official Python image
FROM python:3.10-slim

# Set the working directory
WORKDIR /app

# Copy the requirements and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the app code
COPY app.py .

# Expose the Flask port
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]